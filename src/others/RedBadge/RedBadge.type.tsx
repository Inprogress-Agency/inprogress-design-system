import { ReactNode } from 'react'


export interface RedBadgeProps {

  // fonction pour contrôler l'affichage du badge

  config: {
    useDisplayBadge?: () => boolean;
  },

  // Des éléments enfants optionnels à afficher à l'intérieur du badge

  children?: ReactNode

}
