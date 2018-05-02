import DummyService, { Dummy, IDummyService } from "../../services/dummy.service";

const dummyResolver = (service: IDummyService): any => {

    return {
        Query: {
            dummy() {
                const result: Dummy = service.findDummy();
                
                return result;
            }
        }
    };

}

export default dummyResolver;