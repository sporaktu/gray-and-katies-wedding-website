import storage from "@nuxtjs/auth/lib/core/storage";

export default async function ({app: { $auth, $axios }}) {
  if (!$auth && !$auth.loggedIn) {
    return
  }
  const { email } = $auth.$storage.getUniversal('user');
  const appMetaData = $auth.$storage.getUniversal('appMetaData');
  if (!appMetaData) {
    try {
      const { data } = await $axios.post('/api/management', { email })
      $auth.$storage.setUniversal('appMetaData', data, false)
    }
    catch (err) {
      console.error(err);
    }
  }
}
