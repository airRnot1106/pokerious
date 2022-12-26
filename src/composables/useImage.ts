import type { Ref } from '@/types/type';

export default (src: Ref<string>) => {
  const url = ref('');

  const imageLoadEvent = createEventHook<void>();

  const load = () => {
    url.value = new URL(`../assets/images/${src.value}`, import.meta.url).href;
    setTimeout(() => imageLoadEvent.trigger(), 1); // 1ms is the minimum delay for the image to load
  };

  watch(src, load);

  onMounted(load);

  return { url: readonly(url), onLoaded: imageLoadEvent.on };
};
