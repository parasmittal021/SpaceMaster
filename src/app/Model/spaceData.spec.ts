import { SpaceDataModel } from './spaceData';
describe('SpaceDataModel', () => {
  it('it should create space data model', () => {
    const spaceData = new SpaceDataModel(null);
    expect(spaceData).toBeTruthy();
  });

  it('Creation of SpaceDataModel', () => {
    const spacedata = {
      mission_name: 'ABC',
      flight_number: 7,
      mission_id: ['ABC'],
      launch_year: '2020',
      launch_success: true,
      rocket: {
          first_stage: {
              cores: [{
                  land_success: true
              }]
          }
      },
      links: {
          mission_patch: 'image.png',
          mission_patch_small: 'small-image.png'
      }
    };
    const spaceDataModel = new SpaceDataModel(spacedata);
    expect(spaceDataModel.flightNumber).toBeTruthy();
  });
});
