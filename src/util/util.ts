import {computed} from "vue";

const getImageUrl = function (rawImage:string) {
    return computed(() => 'url("' + rawImage + '")').value;
}

export default {getImageUrl}