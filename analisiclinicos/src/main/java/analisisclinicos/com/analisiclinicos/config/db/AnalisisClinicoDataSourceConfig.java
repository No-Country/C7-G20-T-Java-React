package analisisclinicos.com.analisiclinicos.config.db;

import com.zaxxer.hikari.HikariDataSource;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.autoconfigure.jdbc.DataSourceProperties;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.jdbc.datasource.lookup.JndiDataSourceLookup;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import javax.sql.DataSource;

@Configuration
@EnableTransactionManagement
public class AnalisisClinicoDataSourceConfig {

    @Bean(name = "analisisClinicosDataSourceProperties")
    @ConfigurationProperties("spring.datasource")
    public DataSourceProperties dataSourceProperties() { return new DataSourceProperties();}

    @Bean(name = "analisisClinicoDataSource")
    public DataSource dataSource(@Qualifier("analisisClinicosDataSourceProperties") DataSourceProperties properties){
        if(properties.getJndiName() != null && !properties.getJndiName().isEmpty()){
            JndiDataSourceLookup dataSourceLookup = new JndiDataSourceLookup();
            return dataSourceLookup.getDataSource(properties.getJndiName());
        }
        return properties.initializeDataSourceBuilder().type(HikariDataSource.class).build();
    }

    @Bean("analisisClinicoJdbcTemplate")
    public NamedParameterJdbcTemplate jdbcTemplate(@Qualifier("analisisClinicoDataSource") DataSource ccbsDataSource){
        return new NamedParameterJdbcTemplate(ccbsDataSource);
        //return new JdbcTemplate(ccbsDataSource);
    }

    @Bean("analisisClinicoTransactionManager")
    public PlatformTransactionManager platformTransactionManager (@Qualifier("analisisClinicoDataSource") DataSource dataSource) {
        return new DataSourceTransactionManager(dataSource);
    }
}
