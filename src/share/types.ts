import React from 'react';

export enum SelectedPage {
  Home = 'home',
  Benefits = 'benefits',
  OurClasses = 'ourClasses',
  ContactUS = 'contactUS',
}
export type benefitObject = {
  id: number;
  icon: React.ReactNode;
  label: string;
  description: string;
};
export type imgProps = {
  name: string;
  description: string;
  imgUrl: string;
};
