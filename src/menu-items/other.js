// assets
import { IconBrandChrome, IconSettings  } from '@tabler/icons-react';

// constant
const icons = { IconBrandChrome, IconSettings  };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
  id: 'sample-docs-roadmap',
  type: 'group',
  children: [
    
    {
      id: 'documentation',
      title: 'Pengaturan',
      type: 'item',
      url: 'https://codedthemes.gitbook.io/berry/',
      icon: icons.IconSettings,
      external: true,
      target: true
    }
  ]
};

export default other;
