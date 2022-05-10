module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      settings: {
        chromeFlags: '--disk-cache-size=0 --no-sandbox --headless --disable-dev-shm-usage --disable-gpu',
      },
      url: ['https://www.integration.propertyguru.com.sg/singapore-property-listing/hdb'],
    },
    assert: {
      assertions: {
        "categories:performance": ["warn", {"minScore": 0.9}],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
