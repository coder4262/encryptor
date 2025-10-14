customElements.define("meta-data",data);
class data extends HTMLElement{
    constructor(){
        this.innerHTML = `
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta charset="UTF-8">
        <meta name="description" content="Secure AES-GCM encryption tool">
        <meta name="keywords" content="encryptor,encrypter,decrypter,decryptor,encryption,decryption">
        `
    }
}
