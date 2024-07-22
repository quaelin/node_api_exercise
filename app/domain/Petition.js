export class Petition {
    constructor(fields) {
        this.title = fields.title;
        this.body = fields.body || '';
        this.created_at = fields.created_at || new Date().toISOString();
        this.updated_at = fields.updated_at || new Date().toISOString();
    }

    startedBy(name) {
        this.starter_name = name;
        return this;
    }
}
