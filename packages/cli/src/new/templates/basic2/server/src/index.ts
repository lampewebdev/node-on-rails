import * as fastify from 'fastify';
import * as fastifyJWT  from 'fastify-jwt';
import { Server, IncomingMessage, ServerResponse } from "http";

const server: fastify.FastifyInstance<
    Server,
    IncomingMessage,
    ServerResponse
> = fastify({ logger: true })

server.register(fastifyJWT, {
    secret: "sdfj23je092je23ne2end0i32j3ken23idj230iej293i"
})

const start = async () => {
    try {
        await server.listen(3000, "localhost");
    } catch (err) {
        console.log(err);
        server.log.error(err);
        process.exit(1);
    }
};

server.post('/signup', (req, reply) => {
    const { body: { payload }} = req;
    server.log.info(payload)
    const token = server.jwt.sign({ payload })
    reply.send({ token })
})

process.on("uncaughtException", error => {
    console.error(error);
});
process.on("unhandledRejection", error => {
    console.error(error);
});

start();