import { siteConfig } from './config';

export const SITE_TITLE = siteConfig.title;
export const SITE_SUBTITLE = siteConfig.subtitle;
export const SITE_DESCRIPTION = siteConfig.description;
export const AUTHOR = siteConfig.author;

export const formatDate = (date: Date) =>
  new Intl.DateTimeFormat('zh-CN', {
    timeZone: 'Asia/Shanghai',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);

export const postPath = (id: string, date: Date) => {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Shanghai', year: 'numeric', month: '2-digit', day: '2-digit',
  }).format(date).split('-');
  return `/${parts[0]}/${parts[1]}/${parts[2]}/${encodeURIComponent(id)}/`;
};
