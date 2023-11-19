import * as k8s from '@kubernetes/client-node';

const kc = new k8s.KubeConfig();
kc.loadFromString(process.env.UI_KUBECONFIG ?? '');

const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

export const getNamespaceList = async () => {
  try {
    return await k8sApi.listNamespace();
  } catch (err) {
    console.error(err);
  }
};
