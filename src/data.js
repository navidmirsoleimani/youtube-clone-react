// api key that we got from youtube data api
export const API_KEY = 'AIzaSyCzbd_kQOTsLi6RFaZK3kyMX1mhWhk5n8E'


// a function to convert the complete view count numbers into K/M/B form
export const value_convertor = (number)=> {
    if (number >= 1100000000) {
        return Math.round((number/1000000000) * 10) / 10 + 'B'
    } else if (number >= 1000000000) {
        return Math.floor(number/1000000000) + 'B';
    } else if (number >= 1100000 ) {
        return Math.round((number/1000000) * 10) / 10 + 'M'
    } else if (number >= 1000000) {
        return Math.floor(number/1000000) + 'M';
    } else if (number >= 1000) {
        return Math.floor(number/1000) + 'K';
    } else {
        return number
    }
}