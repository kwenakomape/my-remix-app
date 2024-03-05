CREATE MIGRATION m1aw6prmypwcb2jcjdufszhsr2mbktx5yt5iwlg66soo2cxljzya6a
    ONTO m1tkkowiyv4wcstzl3npov2jsq3c2ubtlujs4eeuxzxht7dmkledqa
{
  ALTER TYPE default::SchoolDetails {
      CREATE REQUIRED PROPERTY StreetAdress: std::str {
          SET REQUIRED USING ('Untitled');
      };
  };
  ALTER TYPE default::SchoolDetails {
      CREATE REQUIRED PROPERTY Town_City: std::str {
          SET REQUIRED USING ('Untitled');
      };
  };
  ALTER TYPE default::SchoolDetails {
      ALTER PROPERTY schoolAddress {
          RENAME TO Country;
      };
  };
};
