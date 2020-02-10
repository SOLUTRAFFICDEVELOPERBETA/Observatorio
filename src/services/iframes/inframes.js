import Firebase from '../firebase/firebase';

const COLLECTIONNAME = 'iframes';
class IframeService {
    constructor() {
        this.iframeProvider = new Firebase()
    }
    doObserveIframe = (docId, func) => {
        return this.iframeProvider.doObserveCollectionDocument(COLLECTIONNAME, docId, func);
    };

    doGetIframe = (docId) => {
        return this.iframeProvider.doGetCollectionDocument(COLLECTIONNAME, docId);
    };
    doCreateIframe = (data) => {
        return this.iframeProvider.doCreateCollectionDocument(COLLECTIONNAME, data);
    };
    doEditIframe = (docId, newData) => {
        return this.iframeProvider.doEditCollectionDocument(COLLECTIONNAME, docId, newData);
    };
    doDeleteIframe = (docId) => {
        return this.iframeProvider.doDeleteCollectionDocumento(COLLECTIONNAME, docId);
    }
    doGetAllIframes = () => {
        return this.iframeProvider.doGetAllCollectionDocument(COLLECTIONNAME);
    }
}

export default IframeService;