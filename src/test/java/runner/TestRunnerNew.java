package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features= {"C:\\Users\\pc\\eclipse-workspace\\com.MaveCucumberJenkins\\features"}
				, glue= {"StepDefinition"}
               
				, dryRun=false
				, plugin = {"pretty", "html:target/cucumber-default-reports",
						"json:target/cucumber.json"}
				,monochrome= true
				
		
		)

public class TestRunnerNew {

}
