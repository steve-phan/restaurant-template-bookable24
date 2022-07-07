import { IComponentInfoProps } from '@bookable24/components/SectionsComponent/CenterSectionComponent/CenterSectionComponent';

export const homePageData: Record<string, IComponentInfoProps> = {
  heroSection: {
    header: 'MAISON-TOM',
    subHeader: '— Asian Restaurant —',
    description:
      'With the desire to bring delicious food to customers, MAISON - TOM has spent many years researching and perfecting the recipe so that our customers will always remember the experience and our flavor. We always welcome you and make sure you have the most comfortable experience here. Regards.',
    buttons: {
      buttonLeft: {
        text: 'Online Bestellung',
        path: '/oder',
      },
      buttonRight: {
        text: 'Tisch Reservieren',
        externalLink: 'https://www.bookable24.de/shop-test1234561',
      },
    },
  },
  bookingSection: {
    smallHeader: 'Online Reservieren',
    description:
      'With a busy life, it is very convenient for us to schedule an online appointment so that we don have to wait. You could call us directly to book a table or fill the form on our system. The system is available 24/7 and 365 days a year. ',
    CTAButton: {
      text: 'Tisch Reservieren',
      externalLink: 'https://www.bookable24.de/shop-test1234561',
    },
  },
  menuSection: {
    smallHeader: 'Unser Menu',
    description:
      'Variety comes from our menu. We create culinary masterpieces and you will be the one to admire it. ',
    CTAButton: {
      text: 'Unser Menu',
      path: '/oder',
    },
  },
  aboutSection: {
    header: 'MAISON - TOM',
    description:
      "We're all juggling busy schedules. That's why we're constantly looking for new ways to make life easier for our clients—like making it quicker to book your next appointment, for example! Scheduling your next visit is now convenient and hassle-free with our online booking platform. Whether you struggle to call during normal working hours or prefer to do everything digitally, you can make a booking anytime you like, right here on our website. Just find a time that suits you then confirm your booking with a click.",

    buttons: {
      buttonLeft: {
        text: 'Uber uns',
        path: '/about',
      },
      buttonRight: {
        text: 'Kontaktiere Uns fur mehr',
        path: '/contact',
      },
    },
  },
};
