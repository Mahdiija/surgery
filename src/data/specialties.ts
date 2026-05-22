export const specialtiesData = {
  reconstructive: {
    icon: 'rebase_edit',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBonsJdasUEL58ydGcLT5T8o3KzurXuFiMp41hWVHBOKT-D5YO8QCqYoLOlXkf72MfYxk-m494hzimCZfXkNA8Z73ABKCQkiPXjpLmZCTBEICd_DtCoJNCYg1WqifpXEsvoish2PsUrAtdIWf57z-3IFoY6guJgbG59wHLJJ_nshCiBXOjpULMWcdVcgPaROmM4E80BCIgoZVSvn_Wfxs2Co1v_y6OKebLYyEPsr4vHbxafZfRCj7fJgY2N3zC4NXlgIV5O5MfTRGdP',
    color: 'secondary'
  },
  oral: {
    icon: 'dentistry',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsS7_ES3xWZX3jLIcqBZA723lQ83yOO_66AbtGUelwdF76Lcip2gR4ShC7GK1RBL20sejDP2BzyIO9JsHuOGhvIQkYQjMNCXRwntk5qMbe7scbGcAWdXTzODv9MpdXSKYX3ipp1c6UYSIcOO-9BcjWE5LNUFAKmQlRFIQHTbyY2xmah-EqGG7m3zUaqv8iO-cm4ANOGcgGiou2CT2DianuFpRGsGl9ll-VGZv8GbN_rdh8szMLUYBa-gIYQEECrJA8jJr5jo2qkXjO',
    color: 'secondary'
  },
  aesthetics: {
    icon: 'face_6',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRp1K1ux7wjaoSc-4YsnIrUQF0IccfU0UpjDWlP_BCQniX2npptP42DLozFaxmrAwbUh4bFgsf_IcHi9ExYuAnoketofQyqU7AJ5lJ08ZfcVtx4i49phJIG52ZMj626ytdxYAoYzsH8dMSCRz7e4rai1GQcruxk7v-6a9Crsc63sU_2QjAIC68i_Gyc_2NaECTdKT9VVS4z7MErLCE9cg9e9CJ4Sl7smvwvWiA1TgM7VlBrw3W4WZDvXFsRFCkZPs1aXz7WzwF2cee',
    color: 'secondary'
  },
  trauma: {
    icon: 'medical_services',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCt8b4UnJ1QK5TdubJTJ8Fr2x8_-q6binTRQ3kLdBdCFqCV1_tteNiulj73QIzGGua9MiaOBd9h6_88Wr_IHHBUUmkLgMyIIS3sXfe0NNXlqetAsmlEX5-PXd9ycn1J9rg1qnxiSsQPMCV2hUHeRMmD9EpzFke9noUs1kKO8Vw1LaKNSJaIBn7Inu2vRLck8hCDvlmulJCxVt425iXJiUyKSmn6iyNUvZttQxJkio8kx4R_6efONFi3f1RHQSc4eP8nzbBivvYYvNhI',
    color: 'error'
  }
};

export type SpecialtySlug = keyof typeof specialtiesData;
