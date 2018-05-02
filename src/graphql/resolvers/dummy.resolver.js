
// TOOD: Ghetto DI. Typescript (interfaces) will help this.
// Then at least resolvers act just like controllers or command handlers
// that can change implementation.
const dummyResolver = (service) => {
    return {
        Query: {
            dummy() {
                const result = service.dummyMessage();
                
                return { message: result.message };
            }
        }
    }
}

module.exports = dummyResolver;