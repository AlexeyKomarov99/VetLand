module.exports = class UserDto {
    constructor(model) {
        this.id = model.id,
        this.name = model.name,
        this.surname = model.surname,
        this.email = model.email,
        this.phone = model.phone,
        this.password = model.password
    }
}