export class Dummy {
    message: string; 
}

export interface IDummyService {
    findDummy(): Dummy
};

class DummyService implements IDummyService {

    findDummy = (): Dummy => {
        var dummy = new Dummy();
        dummy.message = 'Dummy api endpoint wow.';

        return dummy;
    }

};

export default DummyService;