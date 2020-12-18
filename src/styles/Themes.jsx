/* eslint-disable */
import {light, dark, blue} from './Colors';
import {primaryFont, secondaryFont} from './typography';

export const lightTheme = {
  primaryBackgroundColor: light[200],
  primaryTextColor: dark[100],
  darkTextColor: dark[100],
  textColorOnPrimary: light[100],
  backgroundColorTheme: blue[100],
  jobPostListingsColor: blue[300],
  primaryHoverColor: blue[300],
  primaryFont,
  secondaryFont,
};


export const darkTheme = {
  primaryBackgroundColor: dark[100],
  primaryTextColor: dark[100],
  primaryHoverColor: blue[300],
  darkTextColor: dark[100],
  textColorOnPrimary: dark[100],
  backgroundColorTheme: blue[100],
  jobPostListingsColor: blue[300],
  primaryFont,
  secondaryFont,
};