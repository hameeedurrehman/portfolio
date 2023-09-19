import React from 'react';

const FiverrSellerBadge = () => {
  return (
    <div
      itemscope
      itemtype='http://schema.org/Person'
      className='fiverr-seller-widget'
      style={{ display: 'inline-block' }}
    >
      <a
        itemprop='url'
        href='https://www.fiverr.com/hameedurrehman0'
        rel='nofollow'
        target='_blank'
        style={{ display: 'inline-block' }}
      >
        <div
          className='fiverr-seller-content'
          id='fiverr-seller-widget-content-d6b7cc08-ff0a-45f3-96d7-26b9e6710a8e'
          itemprop='contentURL'
          style={{ display: 'none' }}
        ></div>
        <div id='fiverr-widget-seller-data' style={{ display: 'none' }}>
          <div itemprop='name'>hameedurrehman0</div>
          <div itemscope itemtype='http://schema.org/Organization'>
            <span itemprop='name'>Fiverr</span>
          </div>
          <div itemprop='jobtitle'>Seller</div>
          <div itemprop='description'>
            As a computer science professional with expertise in frontend web
            development, I possess a strong set of skills and experience that
            align perfectly with your requirements.
            <br />
            I am confident that my skills, experience, and dedication to
            delivering high-quality results make me an ideal candidate for your
            project. I look forward to discussing further how I can contribute
            to your team's success.
          </div>
        </div>
      </a>
    </div>
  );
};

const FiverrSellerBadgeScript = () => {
  return (
    <script
      id='fiverr-seller-widget-script-d6b7cc08-ff0a-45f3-96d7-26b9e6710a8e'
      src='https://widgets.fiverr.com/api/v1/seller/hameedurrehman0?widget_id=d6b7cc08-ff0a-45f3-96d7-26b9e6710a8e'
      data-config='{"category_name":"Programming \u0026 Tech"}'
      async={true}
      defer={true}
    ></script>
  );
};

const YourComponent = () => {
  return (
    <div>
      <FiverrSellerBadge />
      <FiverrSellerBadgeScript />
    </div>
  );
};

export default YourComponent;
