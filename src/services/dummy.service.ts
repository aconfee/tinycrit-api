export class Dummy {
    message: string; 
}

export class DummyService {

    dummyMessage = (): Dummy => {
        var dummy: Dummy;
        dummy.message = 'Dummy api endpoint wow.';
        return dummy;
    };

}