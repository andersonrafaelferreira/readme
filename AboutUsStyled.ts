import styled from 'styled-components';

const AboutUsStyled = styled.div`
  .container {
    width: ${props => props.theme.sizes.container()};
    margin: 0 auto;
    ${({ theme }) =>
      theme.mediaQueries.down('lg')(`
      width: ${theme.sizes.container('lg')};
    `)}

    ${({ theme }) =>
      theme.mediaQueries.down('sm')(`
      width: ${theme.sizes.container('sm')};
    `)}

    ${({ theme }) =>
      theme.mediaQueries.down('xs')(`
      width: ${theme.sizes.container('xs')};
    `)}
  }

  .hero-section {
    min-height: 25rem;
    background-color: ${props => props.theme.colors.darkerBlue};
    background-image: url('/assets/images/slider.svg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin-top: -4.6875rem;
    display: flex;
    align-items: center;
    ${({ theme }) =>
      theme.mediaQueries.down('lg')(`
          margin-top: -5.5rem;
        `)};
    ${({ theme }) =>
      theme.mediaQueries.down('sm')(`
          margin-top: -5.6rem;
        `)};
    ${({ theme }) =>
      theme.mediaQueries.down('xs')(`
          margin-top: -5.6rem;
          background-position: -400px center;
        `)};
    h1 {
      color: ${props => props.theme.colors.white};
      font-size: ${props => props.theme.typography.pxToRem(48)};
      font-family: ${props =>
        props.theme.typography.config.fontFamilyRobotoSlab};
      ${props => props.theme.mixins.styledStroke}
      ${({ theme }) =>
        theme.mediaQueries.down('lg')(`
        font-size: ${theme.typography.pxToRem(40)};
    `)}
    }
  }

  .page-editorial-section {
    background-color: ${props => props.theme.colors.lightGray};
    padding-top: 3.75rem;
    padding-bottom: 1.25rem;
    .container {
      padding-left: 5rem;
      padding-right: 5rem;
      ${({ theme }) =>
        theme.mediaQueries.down('lg')(`
        padding-left: 0;
        padding-right: 0;
    `)}
    }
  }

  .statistics-info-section {
    background-color: ${props => props.theme.colors.lightGray};
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;

    .container {
      ${({ theme }) =>
        theme.mediaQueries.down('sm')(`
        width: calc(100% - 1rem);
    `)}
      ${({ theme }) =>
        theme.mediaQueries.down('xs')(`
        width: 100%;
    `)}
    }

    .statistics-numbers {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: flex-start;
      height: 18rem;
      padding-top: 2.375rem;

      ${({ theme }) =>
        theme.mediaQueries.down('xs')(`
        height: auto;
        padding: 1rem 0;
        flex-direction: column;
        align-items: center;
      `)}

      ${({ theme }) =>
        theme.mediaQueries.down('xs')(`
        padding-top: 2.5rem;
        padding-bottom: 2.5rem;
      `)}

      &.light-blue-horizontal-gradient {
        background-image: linear-gradient(
          to top,
          rgba(151, 228, 252, 0),
          rgba(146, 246, 252, 0.2),
          rgba(132, 223, 252, 0.3),
          rgba(116, 162, 252, 0.4)
        );
      }

      .statistics-numbers-item {
        width: 12.5rem;

        ${({ theme }) =>
          theme.mediaQueries.down('lg')(`
          padding-top: 3.375rem;
        `)};

        h1 {
          font-size: 3rem;
          font-family: ${props =>
            props.theme.typography.config.fontFamilyOpenSans};
          font-weight: ${props =>
            props.theme.typography.config.fontWeightExtraBold};
          color: ${props => props.theme.colors.darkBlue};
          margin-top: 0;
          margin-bottom: 1.375rem;
          text-align: center;
          ${({ theme }) =>
            theme.mediaQueries.down('lg')(`
            font-size: 2.5rem;
            line-height: 3.75rem;
            letter-spacing: -0.5px;
        `)}
        }

        p {
          font-size: 1rem;
          line-height: 1.5;
          text-align: center;
          color: #9495b9;
          margin: 0;
        }
      }
    }

    .statistics-heading {
      padding: 0.4375rem 6.25rem;
      ${({ theme }) =>
        theme.mediaQueries.down('lg')(`
        padding: 0.4375rem 0;
      `)};

      h2 {
        font-size: 2.625rem;
        font-family: ${props =>
          props.theme.typography.config.fontFamilyOpenSans};
        font-weight: ${props =>
          props.theme.typography.config.fontWeightExtraBold};
        line-height: 1.33;
        text-align: center;
        color: ${props => props.theme.colors.darkBlue};
        margin: 0;

        ${({ theme }) =>
          theme.mediaQueries.down('lg')(`
          font-weight: ${theme.typography.config.fontWeightSemiBold};
          font-size: 2.875rem;
          line-height: 3.9375rem;
          text-align: center;
          letter-spacing: -1.5px;
        `)}

        ${({ theme }) =>
          theme.mediaQueries.down('xs')(`
          font-size: 2.25rem;
          line-height: 3.0625rem;
          text-align: center;
          letter-spacing: -0.5px;
          padding: 40px 0;
      `)}
      }
    }
  }

  .competitive-advantage-section {
    background-color: ${props => props.theme.colors.darkerBlue};
    background-image: url('/assets/images/polygon.svg');
    background-position: 98% -3.3125rem;
    background-repeat: no-repeat;
    margin-top: 1.875rem;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;

    ${({ theme }) =>
      theme.mediaQueries.down('sm')(`
      background-position: center;
      padding: 56px  40px;
    `)}
    ${({ theme }) =>
      theme.mediaQueries.down('xs')(`
      background-position: center;
      padding: 56px  40px;
    `)}
  }


  .competitive-advantage-section h3 {
    color: ${props => props.theme.colors.white};
    font-size: 2.25rem;
    font-family: ${props => props.theme.typography.config.fontFamilyRobotoSlab};
    ${props => props.theme.mixins.styledStroke}
  }

  .competitive-advantages {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    padding: 1rem 0 3rem;
    ${({ theme }) =>
      theme.mediaQueries.down('sm')(`
      flex-direction: column;
      margin-left: -25px;
    `)}
  }

  .our-team-section {
    background-color: ${props => props.theme.colors.darkGray};
    padding-top: 2.5rem;
    padding-bottom: 5rem;

    ${({ theme }) =>
      theme.mediaQueries.down('sm')(`
      padding-top: 86px;
    `)}
    ${({ theme }) =>
      theme.mediaQueries.down('xs')(`
      padding-top: 86px;
    `)}

    h3 {
      margin: 0;
      font-size: 3.3125rem;
      font-family: ${props =>
        props.theme.typography.config.fontFamilyRobotoSlab};
      color: ${props => props.theme.colors.darkBlue};

      ${props => props.theme.mixins.styledStroke};
      ::after {
        top: 2.1875rem;

        ${({ theme }) =>
          theme.mediaQueries.down('sm')(`
          top: -1.1875rem;
        `)}
      }
    }

    h5 {
      font-family: ${props => props.theme.typography.config.fontFamilyOpenSans};
      padding-left: 6.25rem;
      font-size: 1.5rem;
    }
  }

  .team-member-list {
    padding: 0 5rem;
    flex-direction: row;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    ${({ theme }) =>
      theme.mediaQueries.down('sm')(`
      flex-direction: row;
      padding-left: 100px;
      padding-right: 100px;
    `)}
    ${({ theme }) =>
      theme.mediaQueries.down('xs')(`
      flex-direction: column;
      padding-left: 0px;
      padding-right: 0px;
    `)}
  }

  .team-member {
    display: flex;
    justify-content: center;
    align-items: center;

    &.direction-vertical {
      width: 13rem;
      flex-direction: column;
      padding: 2rem;

      .member-details {
        h6 {
          padding-bottom: 0.3125rem;
          height: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        span.subtitle {
          min-height: 3.125rem;
        }
      }
    }

    &.direction-horizontal {
      flex-direction: row;
      padding: 2rem;
      width: 20rem;

      .member-avatar {
        width: 6.25rem;
        height: 6.25rem;
        margin-right: 1.5625rem;
        margin-bottom: 0;
      }

      .member-details {
        text-align: left;
        h6 {
          padding-bottom: 0;
        }
        p {
          padding-top: 0.5rem;
        }
      }
    }

    .member-avatar {
      width: 8.125rem;
      height: 8.125rem;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      position: relative;
      margin-bottom: 1.5625rem;
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 50%;

      .social-profile {
        position: absolute;
        bottom: 0;
        right: 0;
        background-color: ${props => props.theme.colors.white};
        border-radius: 50%;
      }
    }

    .member-details {
      text-align: center;
      h6 {
        font-size: 1rem;
        font-family: ${props =>
          props.theme.typography.config.fontFamilyOpenSans};
        margin: 0;
        padding-bottom: 0.3125rem;
        text-transform: capitalize;
        font-weight: ${props =>
          props.theme.typography.config.fontWeightSemiBold};
      }
      span.subtitle {
        font-family: ${props =>
          props.theme.typography.config.fontFamilyOpenSans};
        text-transform: capitalize;
        letter-spacing: 0.5px;
        display: block;
      }
      p {
        font-size: 0.8125rem;
        margin: 0;
        text-transform: capitalize;
        color: ${props => props.theme.colors.darkBlue};
        padding-top: 1rem;
      }
    }
  }
`;

export default AboutUsStyled;
