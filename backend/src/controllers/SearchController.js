const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/ParseStringAsArray');

module.exports = {
    async index (request, response){  
        const { latitude, longitude, techs } = request.query;

        const techsArray = parseStringAsArray(techs);
        
        console.log(techsArray)

        const devs  = await Dev.find({
            techs: {
             $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000, 
                },
            },
        });

        //busca 
        //filter search by location and tech 
        return response.json({ devs});
    }
}