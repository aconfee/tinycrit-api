import DummyService, { IDummyService } from "../../services/dummy.service";
import Dummy from '../../services/models/Dummy';

const dummyResolver = (service: IDummyService): any => {

    return {
        Query: {
            dummy(): Dummy {
                const result: Dummy = service.findDummySql();

                return result;
            }
        }
    };

}

export default dummyResolver;