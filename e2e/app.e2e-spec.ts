import { ElasticsearchUiPage } from './app.po';

describe('elasticsearch-ui App', () => {
  let page: ElasticsearchUiPage;

  beforeEach(() => {
    page = new ElasticsearchUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
