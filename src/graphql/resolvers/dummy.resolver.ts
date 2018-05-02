import { DummyService, Dummy } from "../../services/dummy.service";

const dummyResolver = (service: DummyService): any => {

    return {
        Query: {
            dummy() {
                const result: Dummy = service.dummyMessage();
                
                return result;
            }
        }
    };

}

export default dummyResolver;