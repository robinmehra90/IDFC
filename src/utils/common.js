export const formDataGenerator = (data) => {
    let formData = new FormData();
    let keys = Object.keys(data);
    keys.map((key)=>{
        formData.append(key,data[key]);
    });
    return formData;
};

export const removeClass = (element,...classNames)=> {
    classNames.forEach(className=>{
        element && element.classList != undefined ? element.classList.contains(className) && element.classList.remove(className)
            : console.log('Element not Found! Cannot remove '+className+' class');
    });
};


export const addClass = (element,...classNames)=> {
    classNames.forEach(className=>{
        element ? !element.classList.contains(className) && element.classList.add(className)
            : console.log('Element not Found! Cannot add '+className+' class');
    });
};

export const getImage = (publicUrl, options) => {
    let url = '';
// url = ENV_CONFIG.CLOUDINARY_URLS.CLOUD_ACCOUNT_URL;

//Add default options for optimization
    url += 'q_80,fl_lossy,f_auto';

// Adding options with request url eg: height, width
    if (options && options.width) {
        url += ',w_' + options.width;
    }
    if (options && options.aspectRatio) {
        url += ',ar_' + options.aspectRatio;
    }
    if (options && options.height) {
        url += ',h_' + options.height;
    }

    return url + '/' + publicUrl;
};

export const autoCapital = value => {
    if(value!=undefined){
        if(typeof value === 'string'){
            if(value.toLowerCase() === 'mba')
                return value.toUpperCase();
            let newValues = [];
            value.split(' ').forEach((e,i)=>{
                let lowerCase = e.toLowerCase();
                newValues[i] = lowerCase.charAt(0).toUpperCase() + lowerCase.substr(1);
            });
            return newValues.join(' ');
        }else{
            return value;
        }
    }

};