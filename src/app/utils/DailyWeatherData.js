
module.exports = {
    init: function() {
        localStorage.clear();
        localStorage.setItem('weather', JSON.stringify([
            {
                id: '1',
                location: 'London, UK',
                degrees: 17,
                icon: '800',
                humidity:  60,
                wind: 4,
                pressure: 1220
            },
            {
                id: '2',
                location: 'Paris, FR',
                degrees: 12,
                icon: '800',
                humidity:  60,
                wind: 4,
                pressure: 1220
            },
            {
                id: '3',
                location: 'Berlin, GR',
                degrees: 15,
                icon: '800',
                humidity:  60,
                wind: 4,
                pressure: 1220
            }
        ]));
    }
};
