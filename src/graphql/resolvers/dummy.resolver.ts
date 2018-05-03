import DummyService, { IDummyService } from "../../services/dummy.service";
import Dummy from '../../services/models/Dummy.model';

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