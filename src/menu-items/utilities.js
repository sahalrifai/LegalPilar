// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill, IconCirclePlus, IconRefreshDot, IconPackage   } from '@tabler/icons-react';

// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill,
  IconCirclePlus,
  IconRefreshDot,
  IconPackage 
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
  id: 'utilities',
  title: 'Menu',
  type: 'group',
  children: [
    {
      id: 'util-typography',
      title: 'Input Pesanan',
      type: 'item',
      url: '/utils/util-typography',
      icon: icons.IconCirclePlus,
      breadcrumbs: false
    },
    {
      id: 'util-color',
      title: 'Status Pesanan',
      type: 'item',
      url: '/utils/util-color',
      icon: icons.IconRefreshDot,
      breadcrumbs: false
    },
    {
      id: 'util-shadow',
      title: 'Produk',
      type: 'item',
      url: '/utils/util-shadow',
      icon: icons.IconPackage,
      breadcrumbs: false
    }
  ]
};

export default utilities;
