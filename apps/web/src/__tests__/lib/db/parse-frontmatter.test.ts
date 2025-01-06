import { parseFrontmatter } from '@/lib/db/utils/parse-frontmatter';

describe('parseFrontmatter', () => {
  it('should parse frontmatter and content correctly', () => {
    const fileContent = `---
title: 'Test Title'
publishedAt: '2023-01-01'
summary: 'This is a summary'
category: 'Test Category'
banner: 'test-banner.jpg'
alt: 'Test Alt'
image: 'test-image.jpg'
---
This is the content of the file.`;

    const expectedMetadata = {
      title: 'Test Title',
      publishedAt: '2023-01-01',
      summary: 'This is a summary',
      category: 'Test Category',
      banner: 'test-banner.jpg',
      alt: 'Test Alt',
      image: 'test-image.jpg',
    };

    const expectedContent = 'This is the content of the file.';

    const result = parseFrontmatter(fileContent);

    expect(result.metadata).toEqual(expectedMetadata);
    expect(result.content).toBe(expectedContent);
  });

  it('should handle missing optional fields', () => {
    const fileContent = `---
title: 'Test Title'
publishedAt: '2023-01-01'
summary: 'This is a summary'
banner: 'test-banner.jpg'
---
This is the content of the file.`;

    const expectedMetadata = {
      title: 'Test Title',
      publishedAt: '2023-01-01',
      summary: 'This is a summary',
      banner: 'test-banner.jpg',
    };

    const expectedContent = 'This is the content of the file.';

    const result = parseFrontmatter(fileContent);

    expect(result.metadata).toEqual(expectedMetadata);
    expect(result.content).toBe(expectedContent);
  });

  it('should handle frontmatter with quotes', () => {
    const fileContent = `---
title: "Test Title"
publishedAt: "2023-01-01"
summary: "This is a summary"
banner: "test-banner.jpg"
---
This is the content of the file.`;

    const expectedMetadata = {
      title: 'Test Title',
      publishedAt: '2023-01-01',
      summary: 'This is a summary',
      banner: 'test-banner.jpg',
    };

    const expectedContent = 'This is the content of the file.';

    const result = parseFrontmatter(fileContent);

    expect(result.metadata).toEqual(expectedMetadata);
    expect(result.content).toBe(expectedContent);
  });

  it('should throw an error if frontmatter is missing', () => {
    const fileContent = `This is the content of the file without frontmatter.`;

    expect(() => parseFrontmatter(fileContent)).toThrow();
  });
});
