type Model = {
    id: string;
    name: string;
};

export const modelService = {
    getRandomModelId,
};

function getRandomModelId(): string {
    const allModels: Model[] = [
        { id: "ckl2phsabijs71623vk0|ckl2phsabijs71623vqg", name: "Diablo" },
        { id: "ckl2phsabijs71623vk0|ckl2phsabijs71623vog", name: "Reventón" },
        { id: "ckl2phsabijs71623vk0|ckl2phsabijs71623vlg", name: "AVENTADOR" },
        { id: "ckl2phsabijs7162403g|ckl2phsabijs71624040", name: "Zonda" },
        { id: "ckl2phsabijs71623vk0|ckl2phsabijs71623vng", name: "Veneno" },
        { id: "ckl2phsabijs71623vk0|ckl2phsabijs71623vpg", name: "Murciélago" },
        { id: "ckl2phsabijs71623vtg|ckl2phsabijs7162402g", name: "Guilia Quadrifoglio" },
        { id: "ckl2phsabijs7162409g|ckl2phsabijs716240c0", name: "Rally 037" },
        { id: "ckl2phsabijs7162403g|ckl2phsabijs71624050", name: "Huayra" },
        { id: "ckl2phsabijs71623vk0|ckl2phsabijs71623vsg", name: "Miura" },
        { id: "ckl2phsabijs7162409g|ckl2phsabijs716240a0", name: "Delta" },
        { id: "ckl2phsabijs71623vtg|ckl2phsabijs71624010", name: "Mito" },
        { id: "ckl2phsabijs71623vk0|ckl2phsabijs71623vrg", name: "Countach" },
        { id: "ckl2phsabijs71623vtg|ckl2phsabijs71623vu0", name: "Giulietta" },
        { id: "ckl2phsabijs71623vk0|ckl2phsabijs71623vmg", name: "GALLARDO" },
        { id: "ckl2phsabijs71623vtg|ckl2phsabijs71623vvg", name: "4c Spider" },
        { id: "ckl2phsabijs71623vk0|ckl2phsabijs71623vkg", name: "HURACÁN" },
        { id: "ckl2phsabijs71624060|ckl2phsabijs7162406g", name: "Veyron" },
        { id: "ckl2phsabijs7162409g|ckl2phsabijs716240d0", name: "Stratos" },
        { id: "ckl2phsabijs7162409g|ckl2phsabijs716240b0", name: "Ypsilon" },
        { id: "ckl2phsabijs71624060|ckl2phsabijs71624080", name: "Chiron" }
    ];

    const randomIndex = Math.floor(Math.random() * allModels.length);
    return allModels[randomIndex].id;
}
