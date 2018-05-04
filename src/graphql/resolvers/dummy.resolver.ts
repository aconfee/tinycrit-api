import { IDummyService } from "../../services/dummy.service";
import Dummy from '../../services/models/dummy.model';

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