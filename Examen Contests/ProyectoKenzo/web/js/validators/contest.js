"use strict";


const contestValidator = {
    validateContest: function (formData) {
        let errors = [];

        let name = formData.get("name");
        let organizer = formData.get("organizer");
        let description = formData.get("description");
        let prize = formData.get("prize");
        let photo = formData.get("imageUrl");
        let date = formData.get("contestDate");

        if (name.length < 3) {
            errors.push("Nombre mayor de 3 caracteres");
        }
        if (!((name.lenght)%5===0)) {
            errors.push("Longitud no es múltiplo de 5");
        }
        if(prize < 1 || prize > 10000) {
            errors.push("Precio entre 1 y 10000");
        }
        return errors;
    }
};
export { contestValidator };
