import type { Ref } from '@/types/type';

export default (src: Ref<string>) => {
  const url = ref('');

  const load = () => {
    url.value = new URL(`../assets/images/${src.value}`, import.meta.url).href;
  };

  watch(src, load);

  onMounted(load);

  return { url: readonly(url) };
};
