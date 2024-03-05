CREATE MIGRATION m1zlrrflnt7jvcokum4unfy7s2lyf6yxpdobvmbbp22xc6rkb75oha
    ONTO m1aw6prmypwcb2jcjdufszhsr2mbktx5yt5iwlg66soo2cxljzya6a
{
  ALTER TYPE default::SchoolDetails {
      ALTER PROPERTY StreetAdress {
          RENAME TO StreetAddress;
      };
  };
};
