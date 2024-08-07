$(document).ready(function () {
  let bumperRenderedLoanMarket = false;
  let bumperRenderedRayWhite = false;
  let detailCount = 0;

  function appendCategoryItems(items, categoryType) {
    items.forEach(function (category) {
      if (categoryType === 'LoanMarket' && !bumperRenderedLoanMarket) {
        var coverWinnerHtml = `
            <div class="slide" id="${category.id}">
              <h2 class="slide__title slide__title--preview">
                <img src="${data.categories.LoanMarket.logoBiannual}" class="logo__biannual" alt="LOGO BIANNUAL" />
                <img src="${data.categories.LoanMarket.logo}" class="logo__rwi" alt="LOGO Loan Market" />
              </h2>
              <div class="slide__item">
                <div class="slide__inner">
                  <img class="slide__img slide__img--small" src="${category.coverImage}" alt="Some image" />
                  <button class="action action--open" aria-label="View details"></button>
                </div>
              </div>
              <div class="slide__content">
                <div class="slide__content-scroller">
                  <img class="slide__img slide__img--small" src="${category.coverImage}" alt="Some image" />
                </div>
              </div>
            </div>
            <button class="action action--close" aria-label="Close"><i class="fa fa-close"></i></button>
          `;
        $('#slideshow').append(coverWinnerHtml);
        bumperRenderedLoanMarket = true;
      }

      if (categoryType === 'RayWhite' && !bumperRenderedRayWhite) {
        var coverWinnerHtml = `
            <div class="slide" id="${category.id}">
              <h2 class="slide__title slide__title--preview">
                <img src="${data.categories.RayWhite.logoBiannual}" class="logo__biannual" alt="LOGO BIANNUAL" />
                <img src="${data.categories.RayWhite.logo}" class="logo__rwi" alt="LOGO Ray White" />
              </h2>
              <div class="slide__item">
                <div class="slide__inner">
                  <img class="slide__img slide__img--small" src="${category.coverImage}" alt="Some image" />
                  <button class="action action--open" aria-label="View details"></button>
                </div>
              </div>
              <div class="slide__content">
                <div class="slide__content-scroller">
                  <img class="slide__img slide__img--small" src="${category.coverImage}" alt="Some image" />
                </div>
              </div>
            </div>
            <button class="action action--close" aria-label="Close"><i class="fa fa-close"></i></button>
          `;
        $('#slideshow').append(coverWinnerHtml);
        bumperRenderedRayWhite = true;
      }

      var categoryHtml = `
          <div class="slide" id="${category.id}_category">
            <h2 class="slide__title slide__title--preview">
              <img src="${data.categories[categoryType].logoBiannual}" class="logo__biannual" alt="LOGO BIANNUAL" />
              <img src="${data.categories[categoryType].logo}" class="logo__rwi" alt="LOGO ${categoryType}" />
            </h2>
            <div class="slide__item">
              <div class="slide__inner">
                <img class="slide__img slide__img--small" src="${category.categoryImage}" />
                <button class="action action--open" aria-label="View details"></button>
              </div>
            </div>
            <div class="slide__content">
              <div class="slide__content-scroller">
                <img class="slide__img slide__img--small" src="${category.categoryImage}" alt="Some image" />
              </div>
            </div>
          </div>
          <button class="action action--close" aria-label="Close"><i class="fa fa-close"></i></button>
        `;
      $('#slideshow').append(categoryHtml);

      // Detail Pemenang
      for (let i = category.detailPemenang.length - 1; i >= 0; i--) {
        var detail = category.detailPemenang[i];
        var detailHtml = `
            <div class="slide">
              <h2 class="slide__title slide__title--preview">
                <img src="${detail.image}" style="width: 1024px;height: 768px;" />
                <img src="${data.categories[categoryType].logo}" class="logo__rwi" alt="LOGO ${categoryType}" />
                <img src="${data.categories[categoryType].logoBiannual}" class="logo__pemenang">
              </h2>
              <div class="slide__item">
                <div class="slide__inner">
                  <img class="slide__img slide__img--small" src="${detail.imageText}" />
                  <button class="action action--open" aria-label="View details"></button>
                </div>
              </div>
              <div class="slide__content">
                <div class="slide__content-scroller">
                  <img class="slide__img slide__img--small" src="${detail.imageText}" alt="Some image" />
                </div>
              </div>
            </div>
            <button class="action action--close" aria-label="Close"><i class="fa fa-close"></i></button>
          `;
        $('#slideshow').append(detailHtml);
        detailCount++;
      }
    });
  }

  appendCategoryItems(data.categories.LoanMarket.items, 'LoanMarket');
  appendCategoryItems(data.categories.RayWhite.items, 'RayWhite');

  document.documentElement.className = 'js';
  var slideshow = new CircleSlideshow(document.getElementById('slideshow'));
});
