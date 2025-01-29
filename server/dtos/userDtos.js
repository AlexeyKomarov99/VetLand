module.exports = class UserDto {
    constructor(model) {
        this.id = model.id,
        this.name = model.name,
        this.surname = model.surname,
        this.role = model.role,
        this.age = model.age,
        this.gender = model.gender,
        this.region = model.region,
        this.email = model.email,
        this.emailConfirmation = model.emailConfirmation,
        this.phone = model.phone,
        this.password = model.password,
        this.totalAmountDonations = model.totalAmountDonations,
        this.displayRatingDonations = model.displayRatingDonations
    }
}