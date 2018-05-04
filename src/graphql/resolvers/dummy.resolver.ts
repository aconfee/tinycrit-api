import { IDummyService } from "../../services/dummy.service";
import Dummy from '../../services/models/Dummy';

const dummyResolver = (service: IDummyService): any => {

    return {
        Query: {
            dummy(): Dummy {
                return service.findDummySql();
            }
        }
    };

}

export default dummyResolver;