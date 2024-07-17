export class Petition {
    constructor(fields) {
        this.title = fields.title;
        this.body = fields.body;
        this.created_at = fields.created_at;
        this.updated_at = fields.updated_at;
    }

    startedBy(urn) {
        this.starter_urn = urn;
        return this;
    }
}
