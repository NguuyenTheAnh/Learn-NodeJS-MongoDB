const path = require('path');

const uploadSingleFile = async (sampleFile) => {

    // get base name and tail of images
    const extName = path.extname(sampleFile.name);
    const baseName = path.basename(sampleFile.name, extName);
    const finalName = `${baseName}-${Date.now()}${extName}`;

    uploadPath = path.join(__dirname, '../public/images/upload', finalName);

    // Use the mv() method to place the file somewhere on your server
    try {
        await sampleFile.mv(uploadPath);
        return {
            EC: 0,
            data: {
                status: 'success',
                path: finalName,
                error: null
            }
        }
    } catch (error) {
        console.log('>>> check error: ', error);
        return {
            EC: 1,
            data: {
                status: 'fail',
                path: null,
                error: error
            }
        }
    }
}

const uploadMultipleFile = async (uploadFiles) => {
    // Use the mv() method to place the file somewhere on your server
    try {
        let detail = [], countSuccess = 0;
        for (let i = 0; i < uploadFiles.length; i++) {
            let sampleFile = uploadFiles[i];
            // get base name and tail of images
            const extName = path.extname(sampleFile.name);
            const baseName = path.basename(sampleFile.name, extName);
            const finalName = `${baseName}-${Date.now()}${extName}`;
            uploadPath = path.join(__dirname, '../public/images/upload', finalName);
            try {
                await sampleFile.mv(uploadPath);
                countSuccess++;
                detail.push({
                    status: 'success',
                    path: finalName,
                    fileName: sampleFile.name,
                    error: null
                })
            } catch (error) {
                detail.push({
                    status: 'fail',
                    path: null,
                    fileName: sampleFile.name,
                    error: error
                })
            }
        }
        return {
            EC: 0,
            data: {
                countSuccess: countSuccess,
                detail: detail
            }
        }
    } catch (error) {
        console.log('>>> check error: ', error);
        return {
            status: 'fail',
            path: null,
            error: error
        }
    }
}

module.exports = {
    uploadSingleFile, uploadMultipleFile
}