import DummyService, { Dummy, IDummyService } from "../../services/dummy.service";

const dummyResolver = (service: IDummyService): any => {

    return {
        Query: {
            dummy(): Dummy {
                const result: Dummy = service.findDummy();
                
                return result;
            }
        }
    };

}

export default dummyResolver;