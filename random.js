module.exports = class Random{
    getDate(){
        let start = new Date(2012, 0, 1)
        let end = new Date(2019, 0, 1)
        return this.getDateFromRange(start, end)
    }

    getDateFromRange(start, end){
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
    }

    getFirstName(){
        const firstNames = ['Dan', 'Liam', 'Brunt', 'Max', 'Mini', 'Pheobie', 'Tenor', 'Luca', 'Bobby', 'James', 'Kurtis', 'Ankya']
        let i = Math.floor(Math.random() * firstNames.length)
        return firstNames[i]
    }

    getLastName(){
        const lastNames = ['Taylor', 'Kelly', 'Williams', 'Southee', 'Arthur', 'Pattinson', 'Waugh', 'Singh', 'Iyer', 'Gowda', 'Pitt', 'Khan']
        let i = Math.floor(Math.random() * lastNames.length)
        return lastNames[i]
    }
}