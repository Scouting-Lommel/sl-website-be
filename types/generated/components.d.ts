import type { Schema, Attribute } from '@strapi/strapi';

export interface ContentBlocksActivitiesBlock extends Schema.Component {
  collectionName: 'components_content_blocks_activities_blocks';
  info: {
    displayName: 'activitiesBlock';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    blockProperties: Attribute.Component<'general.block-properties'>;
    callToAction: Attribute.Component<'general.block-properties'>;
    initialItems: Attribute.Integer;
  };
}

export interface ContentBlocksArticlesBlock extends Schema.Component {
  collectionName: 'components_content_blocks_articles_blocks';
  info: {
    displayName: 'articlesBlock';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    blockProperties: Attribute.Component<'general.block-properties'>;
    callToAction: Attribute.Component<'general.call-to-action'>;
  };
}

export interface ContentBlocksCalendarBlock extends Schema.Component {
  collectionName: 'components_content_blocks_calendar_blocks';
  info: {
    displayName: 'calendarBlock';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    blockProperties: Attribute.Component<'general.block-properties'>;
    callToAction: Attribute.Component<'general.call-to-action'>;
  };
}

export interface ContentBlocksContactFormBlock extends Schema.Component {
  collectionName: 'components_content_blocks_contact_forms';
  info: {
    displayName: 'contactFormBlock';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subjectOptions: Attribute.Component<'general.subject-option', true>;
    blockProperties: Attribute.Component<'general.block-properties'>;
  };
}

export interface ContentBlocksDivider extends Schema.Component {
  collectionName: 'components_general_dividers';
  info: {
    displayName: 'divider';
    icon: 'oneToOne';
    description: '';
  };
  attributes: {
    variant: Attribute.Enumeration<['default', 'light']> &
      Attribute.Required &
      Attribute.DefaultTo<'default'>;
  };
}

export interface ContentBlocksFaqBlock extends Schema.Component {
  collectionName: 'components_content_blocks_faq_blocks';
  info: {
    displayName: 'faqBlock';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    faqItems: Attribute.Relation<
      'content-blocks.faq-block',
      'oneToMany',
      'api::faq-item.faq-item'
    >;
    blockProperties: Attribute.Component<'general.block-properties'>;
    bottomText: Attribute.RichText;
  };
}

export interface ContentBlocksFilesBlock extends Schema.Component {
  collectionName: 'components_content_blocks_files_blocks';
  info: {
    displayName: 'filesBlock';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    blockProperties: Attribute.Component<'general.block-properties'>;
  };
}

export interface ContentBlocksForm extends Schema.Component {
  collectionName: 'components_content_blocks_forms';
  info: {
    displayName: 'Form';
    description: '';
  };
  attributes: {
    bankAccount: Attribute.String;
    leaderPrice: Attribute.Decimal;
    childPrice: Attribute.Decimal;
  };
}

export interface ContentBlocksGalleryBlock extends Schema.Component {
  collectionName: 'components_content_blocks_gallery_blocks';
  info: {
    displayName: 'galleryBlock';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    initialItems: Attribute.Integer & Attribute.DefaultTo<6>;
    images: Attribute.Media;
    blockProperties: Attribute.Component<'general.block-properties'>;
    callToAction: Attribute.Component<'general.call-to-action'>;
  };
}

export interface ContentBlocksGroupsBlock extends Schema.Component {
  collectionName: 'components_content_blocks_groups_blocks';
  info: {
    displayName: 'groupsBlock';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    groups: Attribute.Relation<
      'content-blocks.groups-block',
      'oneToMany',
      'api::group.group'
    >;
    blockProperties: Attribute.Component<'general.block-properties'>;
    callToAction: Attribute.Component<'general.call-to-action'>;
  };
}

export interface ContentBlocksHeroBlock extends Schema.Component {
  collectionName: 'components_content_blocks_hero_blocks';
  info: {
    displayName: 'heroBlock';
    description: '';
  };
  attributes: {
    subtitle: Attribute.String;
    callToAction: Attribute.Component<'general.button', true>;
    variant: Attribute.Enumeration<['default', 'large', 'simple']> &
      Attribute.DefaultTo<'default'>;
    socialsCta: Attribute.Component<'general.socials-cta'>;
    yearTheme: Attribute.Relation<
      'content-blocks.hero-block',
      'oneToOne',
      'api::year-theme.year-theme'
    >;
    bgImage: Attribute.Media;
    title: Attribute.RichText;
  };
}

export interface ContentBlocksLeadersBlock extends Schema.Component {
  collectionName: 'components_content_blocks_leaders_blocks';
  info: {
    displayName: 'leadersBlock';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    blockProperties: Attribute.Component<'general.block-properties'>;
    callToAction: Attribute.Component<'general.call-to-action'>;
  };
}

export interface ContentBlocksMapBlock extends Schema.Component {
  collectionName: 'components_content_blocks_map_blocks';
  info: {
    displayName: 'mapBlock';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    blockProperties: Attribute.Component<'general.block-properties'>;
  };
}

export interface ContentBlocksPolicyBlock extends Schema.Component {
  collectionName: 'components_content_blocks_policy_blocks';
  info: {
    displayName: 'policyBlock';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    sections: Attribute.Component<'general.policy-section', true>;
  };
}

export interface ContentBlocksTarifsBlock extends Schema.Component {
  collectionName: 'components_content_blocks_tarifs_blocks';
  info: {
    displayName: 'tarifsBlock';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    tarifs: Attribute.Relation<
      'content-blocks.tarifs-block',
      'oneToMany',
      'api::tarif.tarif'
    >;
    blockProperties: Attribute.Component<'general.block-properties'>;
    callToAction: Attribute.Component<'general.call-to-action'>;
  };
}

export interface ContentBlocksTextImageBlock extends Schema.Component {
  collectionName: 'components_content_blocks_text_image_blocks';
  info: {
    displayName: 'textImageBlock';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.RichText;
    images: Attribute.Media;
    variant: Attribute.Enumeration<['default', 'reversed']> &
      Attribute.DefaultTo<'default'>;
    ctaButton: Attribute.Component<'general.button'>;
    blockProperties: Attribute.Component<'general.block-properties'>;
    callToAction: Attribute.Component<'general.call-to-action'>;
  };
}

export interface ContentBlocksYearThemeBlock extends Schema.Component {
  collectionName: 'components_content_blocks_year_theme_blocks';
  info: {
    displayName: 'yearThemeBlock';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    blockProperties: Attribute.Component<'general.block-properties'>;
    callToAction: Attribute.Component<'general.call-to-action'>;
  };
}

export interface GeneralBlockProperties extends Schema.Component {
  collectionName: 'components_general_block_properties';
  info: {
    displayName: 'blockProperties';
    icon: 'cogs';
    description: '';
  };
  attributes: {
    variant: Attribute.Enumeration<['light', 'dark']> &
      Attribute.DefaultTo<'dark'>;
    orientation: Attribute.Enumeration<['default', 'reversed']> &
      Attribute.DefaultTo<'default'>;
    slug: Attribute.String & Attribute.Unique;
  };
}

export interface GeneralButton extends Schema.Component {
  collectionName: 'components_general_buttons';
  info: {
    displayName: 'button';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    link: Attribute.String;
    variant: Attribute.Enumeration<['primary', 'light']> &
      Attribute.DefaultTo<'primary'>;
  };
}

export interface GeneralCallToAction extends Schema.Component {
  collectionName: 'components_general_call_to_actions';
  info: {
    displayName: 'callToAction';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    intro: Attribute.RichText;
    ctaLabel: Attribute.String;
    ctaLink: Attribute.String;
  };
}

export interface GeneralContactItem extends Schema.Component {
  collectionName: 'components_general_contact_items';
  info: {
    displayName: 'contactItem';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    link: Attribute.String;
  };
}

export interface GeneralDropdownItem extends Schema.Component {
  collectionName: 'components_general_dropdown_items';
  info: {
    displayName: 'dropdownItem';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    page: Attribute.Enumeration<
      [
        'kapoenen',
        'welpen',
        'akabe',
        'jonggivers',
        'givers',
        'jin',
        'lokaal_en_speelweide',
        'tentenweide'
      ]
    >;
    link: Attribute.String;
  };
}

export interface GeneralFooterNav extends Schema.Component {
  collectionName: 'components_general_footer_navs';
  info: {
    displayName: 'footerNav';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    navItems: Attribute.Component<'general.link', true>;
  };
}

export interface GeneralLink extends Schema.Component {
  collectionName: 'components_general_links';
  info: {
    displayName: 'link';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    link: Attribute.String;
  };
}

export interface GeneralNavigationItem extends Schema.Component {
  collectionName: 'components_general_navigation_items';
  info: {
    displayName: 'navigationItem';
    icon: 'check';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    page: Attribute.Enumeration<
      [
        'home',
        'takken',
        'verhuur',
        'algemene_informatie',
        'scoutsgazet',
        'inschrijven',
        'contact',
        'drugs_alcohol_beleid',
        'privacy_overeenkomst',
        'cookie_overeenkomst'
      ]
    >;
    isButton: Attribute.Boolean & Attribute.DefaultTo<false>;
    dropdownItems: Attribute.Component<'general.dropdown-item', true>;
    link: Attribute.String;
    dropdownCta: Attribute.Component<'general.call-to-action'>;
    dropdownTitle: Attribute.String;
    dropdownButton: Attribute.Component<'general.button'>;
  };
}

export interface GeneralPageMeta extends Schema.Component {
  collectionName: 'components_general_page_metas';
  info: {
    displayName: 'pageMeta';
    description: '';
  };
  attributes: {
    pageTitle: Attribute.String;
    pageDescription: Attribute.RichText;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    noIndex: Attribute.Boolean & Attribute.DefaultTo<false>;
    slug: Attribute.String;
  };
}

export interface GeneralPolicySection extends Schema.Component {
  collectionName: 'components_general_policy_sections';
  info: {
    displayName: 'policySection';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.RichText;
  };
}

export interface GeneralSocialsCta extends Schema.Component {
  collectionName: 'components_general_socials_ctas';
  info: {
    displayName: 'socialsCta';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    socialItems: Attribute.Relation<
      'general.socials-cta',
      'oneToMany',
      'api::social-item.social-item'
    >;
  };
}

export interface GeneralSubjectOption extends Schema.Component {
  collectionName: 'components_general_subject_options';
  info: {
    displayName: 'subjectOption';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    emailAddress: Attribute.String;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'content-blocks.activities-block': ContentBlocksActivitiesBlock;
      'content-blocks.articles-block': ContentBlocksArticlesBlock;
      'content-blocks.calendar-block': ContentBlocksCalendarBlock;
      'content-blocks.contact-form-block': ContentBlocksContactFormBlock;
      'content-blocks.divider': ContentBlocksDivider;
      'content-blocks.faq-block': ContentBlocksFaqBlock;
      'content-blocks.files-block': ContentBlocksFilesBlock;
      'content-blocks.form': ContentBlocksForm;
      'content-blocks.gallery-block': ContentBlocksGalleryBlock;
      'content-blocks.groups-block': ContentBlocksGroupsBlock;
      'content-blocks.hero-block': ContentBlocksHeroBlock;
      'content-blocks.leaders-block': ContentBlocksLeadersBlock;
      'content-blocks.map-block': ContentBlocksMapBlock;
      'content-blocks.policy-block': ContentBlocksPolicyBlock;
      'content-blocks.tarifs-block': ContentBlocksTarifsBlock;
      'content-blocks.text-image-block': ContentBlocksTextImageBlock;
      'content-blocks.year-theme-block': ContentBlocksYearThemeBlock;
      'general.block-properties': GeneralBlockProperties;
      'general.button': GeneralButton;
      'general.call-to-action': GeneralCallToAction;
      'general.contact-item': GeneralContactItem;
      'general.dropdown-item': GeneralDropdownItem;
      'general.footer-nav': GeneralFooterNav;
      'general.link': GeneralLink;
      'general.navigation-item': GeneralNavigationItem;
      'general.page-meta': GeneralPageMeta;
      'general.policy-section': GeneralPolicySection;
      'general.socials-cta': GeneralSocialsCta;
      'general.subject-option': GeneralSubjectOption;
      'shared.meta-social': SharedMetaSocial;
    }
  }
}
