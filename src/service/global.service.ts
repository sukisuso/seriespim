import { Injectable }     from '@angular/core';

@Injectable()
export class GlobalService {

    private content: Object;


    getContent () {
        return this.content;
    }

    setContent (newContent: Object) {
        this.content = newContent;
    }
} 