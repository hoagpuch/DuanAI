package com.duanai.config;

import com.duanai.model.News;
import com.duanai.model.Match;
import com.duanai.repository.NewsRepository;
import com.duanai.repository.MatchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
public class DataInitializer implements CommandLineRunner {
    
    @Autowired
    private NewsRepository newsRepository;
    
    @Autowired
    private MatchRepository matchRepository;
    
    @Override
    public void run(String... args) throws Exception {
        // Initialize sample news data
        initializeNewsData();
        
        // Initialize sample match data
        initializeMatchData();
    }
    
    private void initializeNewsData() {
        if (newsRepository.count() == 0) {
            // Premier League News
            News news1 = new News();
            news1.setTitle("Haaland ghi bàn thắng thứ 50 trong mùa giải");
            news1.setContent("Erling Haaland đã ghi bàn thắng thứ 50 trong mùa giải 2023/24, giúp Manchester City giành chiến thắng quan trọng trước Arsenal. Cầu thủ người Na Uy tiếp tục chứng minh mình là một trong những tiền đạo xuất sắc nhất thế giới. Với thành tích này, Haaland đã phá vỡ kỷ lục ghi bàn trong một mùa giải của Premier League.");
            news1.setCategory("Premier League");
            news1.setImageUrl("https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800");
            news1.setSourceUrl("https://www.premierleague.com/news/haland-50-goals");
            news1.setAuthor("Phóng viên thể thao");
            news1.setTags("Haaland, Manchester City, Premier League, Kỷ lục");
            news1.setFeatured(true);
            news1.setPublishedDate(LocalDateTime.now().minusDays(1));
            newsRepository.save(news1);
            
            News news2 = new News();
            news2.setTitle("Real Madrid ký hợp đồng với Mbappé");
            news2.setContent("Real Madrid đã chính thức công bố việc ký hợp đồng với Kylian Mbappé từ PSG. Đây là một trong những thương vụ chuyển nhượng lớn nhất trong lịch sử bóng đá. Mbappé sẽ khoác áo số 9 và được kỳ vọng sẽ giúp Real Madrid thống trị châu Âu trong những năm tới.");
            news2.setCategory("Chuyển nhượng");
            news2.setImageUrl("https://images.unsplash.com/photo-1552318965-6e6be7484ada?w=800");
            news2.setSourceUrl("https://www.realmadrid.com/news/mbappe-signing");
            news2.setAuthor("Chuyên gia chuyển nhượng");
            news2.setTags("Mbappé, Real Madrid, PSG, Chuyển nhượng, La Liga");
            news2.setFeatured(true);
            news2.setPublishedDate(LocalDateTime.now().minusDays(2));
            newsRepository.save(news2);
            
            News news3 = new News();
            news3.setTitle("Việt Nam thắng Thái Lan 2-0 tại vòng loại World Cup");
            news3.setContent("Đội tuyển Việt Nam đã giành chiến thắng quan trọng trước Thái Lan với tỷ số 2-0 trong khuôn khổ vòng loại World Cup 2026. Đây là bước tiến quan trọng trong hành trình hướng tới World Cup. Các bàn thắng được ghi bởi Nguyễn Quang Hải và Phạm Tuấn Hải.");
            news3.setCategory("Đội tuyển Việt Nam");
            news3.setImageUrl("https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800");
            news3.setSourceUrl("https://vff.org.vn/news/vietnam-thailand-2-0");
            news3.setAuthor("Phóng viên trong nước");
            news3.setTags("Việt Nam, Thái Lan, World Cup, Vòng loại, Quang Hải");
            news3.setPublishedDate(LocalDateTime.now().minusDays(3));
            newsRepository.save(news3);
            
            News news4 = new News();
            news4.setTitle("Barcelona thua Real Madrid 0-3 tại El Clásico");
            news4.setContent("Barcelona đã phải nhận thất bại đau đớn trước Real Madrid với tỷ số 0-3 trong trận El Clásico. Đây là trận thua nặng nề nhất của Barcelona trong những năm gần đây. Vinícius Júnior lập hat-trick trong trận đấu này.");
            news4.setCategory("La Liga");
            news4.setImageUrl("https://images.unsplash.com/photo-1552318965-6e6be7484ada?w=800");
            news4.setSourceUrl("https://www.laliga.com/news/el-clasico-result");
            news4.setAuthor("Phóng viên Tây Ban Nha");
            news4.setTags("Barcelona, Real Madrid, El Clásico, La Liga, Vinícius");
            news4.setPublishedDate(LocalDateTime.now().minusDays(4));
            newsRepository.save(news4);
            
            News news5 = new News();
            news5.setTitle("Liverpool vô địch Premier League 2024");
            news5.setContent("Liverpool đã chính thức vô địch Premier League 2023/24 sau khi giành chiến thắng trong trận đấu cuối cùng. Đây là danh hiệu Premier League thứ 20 trong lịch sử câu lạc bộ. Jürgen Klopp đã hoàn thành mục tiêu cuối cùng trước khi rời Liverpool.");
            news5.setCategory("Premier League");
            news5.setImageUrl("https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800");
            news5.setSourceUrl("https://www.liverpoolfc.com/news/premier-league-champions-2024");
            news5.setAuthor("Phóng viên Anh");
            news5.setTags("Liverpool, Premier League, Vô địch, Klopp");
            news5.setFeatured(true);
            news5.setPublishedDate(LocalDateTime.now().minusDays(5));
            newsRepository.save(news5);
            
            // Champions League News
            News news6 = new News();
            news6.setTitle("Manchester City lọt vào bán kết Champions League");
            news6.setContent("Manchester City đã vượt qua Bayern Munich để lọt vào bán kết Champions League. Pep Guardiola và các học trò đang nhắm đến danh hiệu Champions League thứ hai liên tiếp.");
            news6.setCategory("Champions League");
            news6.setImageUrl("https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800");
            news6.setSourceUrl("https://www.uefa.com/champions-league/news/city-bayern");
            news6.setAuthor("Phóng viên châu Âu");
            news6.setTags("Manchester City, Bayern Munich, Champions League, Guardiola");
            news6.setPublishedDate(LocalDateTime.now().minusDays(6));
            newsRepository.save(news6);
            
            // Serie A News
            News news7 = new News();
            news7.setTitle("Inter Milan vô địch Serie A 2024");
            news7.setContent("Inter Milan đã chính thức vô địch Serie A 2023/24 với 5 vòng đấu còn lại. Đây là danh hiệu Serie A thứ 20 trong lịch sử câu lạc bộ, giúp họ có thêm một ngôi sao trên áo đấu.");
            news7.setCategory("Serie A");
            news7.setImageUrl("https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800");
            news7.setSourceUrl("https://www.inter.it/news/serie-a-champions-2024");
            news7.setAuthor("Phóng viên Ý");
            news7.setTags("Inter Milan, Serie A, Vô địch, Scudetto");
            news7.setPublishedDate(LocalDateTime.now().minusDays(7));
            newsRepository.save(news7);
            
            // Bundesliga News
            News news8 = new News();
            news8.setTitle("Bayer Leverkusen vô địch Bundesliga lần đầu tiên");
            news8.setContent("Bayer Leverkusen đã tạo nên lịch sử khi lần đầu tiên vô địch Bundesliga. Dưới sự dẫn dắt của Xabi Alonso, đội bóng đã hoàn thành mùa giải bất bại và giành danh hiệu đầu tiên trong lịch sử.");
            news8.setCategory("Bundesliga");
            news8.setImageUrl("https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800");
            news8.setSourceUrl("https://www.bundesliga.com/news/leverkusen-champions");
            news8.setAuthor("Phóng viên Đức");
            news8.setTags("Bayer Leverkusen, Bundesliga, Xabi Alonso, Vô địch");
            news8.setFeatured(true);
            news8.setPublishedDate(LocalDateTime.now().minusDays(8));
            newsRepository.save(news8);
            
            // Ligue 1 News
            News news9 = new News();
            news9.setTitle("PSG vô địch Ligue 1 lần thứ 12");
            news9.setContent("PSG đã vô địch Ligue 1 lần thứ 12 trong lịch sử. Mặc dù mất Mbappé, đội bóng vẫn chứng minh được sức mạnh và khả năng thống trị giải đấu quốc nội.");
            news9.setCategory("Ligue 1");
            news9.setImageUrl("https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800");
            news9.setSourceUrl("https://www.ligue1.com/news/psg-champions-2024");
            news9.setAuthor("Phóng viên Pháp");
            news9.setTags("PSG, Ligue 1, Vô địch, Mbappé");
            news9.setPublishedDate(LocalDateTime.now().minusDays(9));
            newsRepository.save(news9);
            
            // V-League News
            News news10 = new News();
            news10.setTitle("Hà Nội FC vô địch V-League 2024");
            news10.setContent("Hà Nội FC đã vô địch V-League 2024 sau khi vượt qua sự cạnh tranh khốc liệt từ các đội bóng khác. Đây là danh hiệu V-League thứ 6 trong lịch sử câu lạc bộ.");
            news10.setCategory("V-League");
            news10.setImageUrl("https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800");
            news10.setSourceUrl("https://www.vpf.vn/news/hanoi-fc-champions-2024");
            news10.setAuthor("Phóng viên V-League");
            news10.setTags("Hà Nội FC, V-League, Vô địch, Bóng đá Việt Nam");
            news10.setPublishedDate(LocalDateTime.now().minusDays(10));
            newsRepository.save(news10);
            
            // Transfer News
            News news11 = new News();
            news11.setTitle("Arsenal ký hợp đồng với Victor Osimhen");
            news11.setContent("Arsenal đã chính thức ký hợp đồng với tiền đạo Victor Osimhen từ Napoli. Đây là bước tiến quan trọng trong việc củng cố hàng công của đội bóng London.");
            news11.setCategory("Chuyển nhượng");
            news11.setImageUrl("https://images.unsplash.com/photo-1552318965-6e6be7484ada?w=800");
            news11.setSourceUrl("https://www.arsenal.com/news/osimhen-signing");
            news11.setAuthor("Chuyên gia chuyển nhượng");
            news11.setTags("Arsenal, Osimhen, Napoli, Chuyển nhượng");
            news11.setPublishedDate(LocalDateTime.now().minusDays(11));
            newsRepository.save(news11);
            
            // International News
            News news12 = new News();
            news12.setTitle("Argentina vô địch Copa America 2024");
            news12.setContent("Argentina đã vô địch Copa America 2024 sau khi đánh bại Brazil trong trận chung kết. Lionel Messi tiếp tục chứng minh mình là cầu thủ xuất sắc nhất thế giới.");
            news12.setCategory("Quốc tế");
            news12.setImageUrl("https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800");
            news12.setSourceUrl("https://www.conmebol.com/news/argentina-copa-america-2024");
            news12.setAuthor("Phóng viên Nam Mỹ");
            news12.setTags("Argentina, Brazil, Copa America, Messi");
            news12.setFeatured(true);
            news12.setPublishedDate(LocalDateTime.now().minusDays(12));
            newsRepository.save(news12);
        }
    }
    
    private void initializeMatchData() {
        if (matchRepository.count() == 0) {
            // Premier League Matches
            Match match1 = new Match();
            match1.setHomeTeam("Manchester City");
            match1.setAwayTeam("Arsenal");
            match1.setHomeScore(3);
            match1.setAwayScore(1);
            match1.setMatchDate(LocalDateTime.now().minusDays(2));
            match1.setCompetition("Premier League");
            match1.setMatchStatus("FINISHED");
            match1.setStadium("Etihad Stadium");
            match1.setReferee("Michael Oliver");
            match1.setAttendance(55000);
            match1.setHighlightsUrl("https://www.youtube.com/watch?v=highlights-city-arsenal");
            match1.setMatchReport("Manchester City đã thống trị trận đấu với 3 bàn thắng từ Haaland, De Bruyne và Foden. Arsenal chỉ có thể ghi bàn gỡ hòa từ Saka.");
            matchRepository.save(match1);
            
            Match match2 = new Match();
            match2.setHomeTeam("Liverpool");
            match2.setAwayTeam("Manchester United");
            match2.setHomeScore(2);
            match2.setAwayScore(0);
            match2.setMatchDate(LocalDateTime.now().minusDays(1));
            match2.setCompetition("Premier League");
            match2.setMatchStatus("FINISHED");
            match2.setStadium("Anfield");
            match2.setReferee("Anthony Taylor");
            match2.setAttendance(54000);
            match2.setHighlightsUrl("https://www.youtube.com/watch?v=highlights-liverpool-united");
            match2.setMatchReport("Liverpool đã giành chiến thắng quan trọng trước Manchester United với 2 bàn thắng từ Salah và Núñez.");
            matchRepository.save(match2);
            
            // La Liga Matches
            Match match3 = new Match();
            match3.setHomeTeam("Real Madrid");
            match3.setAwayTeam("Barcelona");
            match3.setHomeScore(3);
            match3.setAwayScore(0);
            match3.setMatchDate(LocalDateTime.now().minusDays(3));
            match3.setCompetition("La Liga");
            match3.setMatchStatus("FINISHED");
            match3.setStadium("Santiago Bernabéu");
            match3.setReferee("Mateu Lahoz");
            match3.setAttendance(81000);
            match3.setHighlightsUrl("https://www.youtube.com/watch?v=highlights-real-barcelona");
            match3.setMatchReport("Real Madrid đã thống trị El Clásico với hat-trick từ Vinícius Júnior. Barcelona không thể tạo ra cơ hội nào đáng kể.");
            matchRepository.save(match3);
            
            // Champions League Matches
            Match match4 = new Match();
            match4.setHomeTeam("Manchester City");
            match4.setAwayTeam("Bayern Munich");
            match4.setHomeScore(2);
            match4.setAwayScore(1);
            match4.setMatchDate(LocalDateTime.now().minusDays(4));
            match4.setCompetition("Champions League");
            match4.setMatchStatus("FINISHED");
            match4.setStadium("Etihad Stadium");
            match4.setReferee("Daniele Orsato");
            match4.setAttendance(55000);
            match4.setHighlightsUrl("https://www.youtube.com/watch?v=highlights-city-bayern");
            match4.setMatchReport("Manchester City đã vượt qua Bayern Munich trong trận đấu tứ kết Champions League với 2 bàn thắng từ Haaland và De Bruyne.");
            matchRepository.save(match4);
            
            // International Matches
            Match match5 = new Match();
            match5.setHomeTeam("Việt Nam");
            match5.setAwayTeam("Thái Lan");
            match5.setHomeScore(2);
            match5.setAwayScore(0);
            match5.setMatchDate(LocalDateTime.now().minusDays(5));
            match5.setCompetition("Vòng loại World Cup 2026");
            match5.setMatchStatus("FINISHED");
            match5.setStadium("Sân vận động Mỹ Đình");
            match5.setReferee("Ahmed Al-Kaf");
            match5.setAttendance(40000);
            match5.setHighlightsUrl("https://www.youtube.com/watch?v=highlights-vietnam-thailand");
            match5.setMatchReport("Việt Nam đã giành chiến thắng quan trọng trước Thái Lan với 2 bàn thắng từ Quang Hải và Tuấn Hải.");
            matchRepository.save(match5);
            
            // Upcoming Matches
            Match match6 = new Match();
            match6.setHomeTeam("PSG");
            match6.setAwayTeam("Real Madrid");
            match6.setMatchDate(LocalDateTime.now().plusDays(7));
            match6.setCompetition("Champions League");
            match6.setMatchStatus("SCHEDULED");
            match6.setStadium("Parc des Princes");
            match6.setReferee("Szymon Marciniak");
            matchRepository.save(match6);
            
            Match match7 = new Match();
            match7.setHomeTeam("Arsenal");
            match7.setAwayTeam("Chelsea");
            match7.setMatchDate(LocalDateTime.now().plusDays(5));
            match7.setCompetition("Premier League");
            match7.setMatchStatus("SCHEDULED");
            match7.setStadium("Emirates Stadium");
            match7.setReferee("Paul Tierney");
            matchRepository.save(match7);
            
            Match match8 = new Match();
            match8.setHomeTeam("Barcelona");
            match8.setAwayTeam("Atlético Madrid");
            match8.setMatchDate(LocalDateTime.now().plusDays(6));
            match8.setCompetition("La Liga");
            match8.setMatchStatus("SCHEDULED");
            match8.setStadium("Camp Nou");
            match8.setReferee("Jesús Gil Manzano");
            matchRepository.save(match8);
            
            // Live Match
            Match match9 = new Match();
            match9.setHomeTeam("Bayern Munich");
            match9.setAwayTeam("Borussia Dortmund");
            match9.setHomeScore(2);
            match9.setAwayScore(1);
            match9.setMatchDate(LocalDateTime.now().minusMinutes(30));
            match9.setCompetition("Bundesliga");
            match9.setMatchStatus("LIVE");
            match9.setStadium("Allianz Arena");
            match9.setReferee("Felix Brych");
            match9.setAttendance(75000);
            matchRepository.save(match9);
            
            // Serie A Match
            Match match10 = new Match();
            match10.setHomeTeam("Inter Milan");
            match10.setAwayTeam("AC Milan");
            match10.setHomeScore(1);
            match10.setAwayScore(0);
            match10.setMatchDate(LocalDateTime.now().minusDays(6));
            match10.setCompetition("Serie A");
            match10.setMatchStatus("FINISHED");
            match10.setStadium("San Siro");
            match10.setReferee("Daniele Doveri");
            match10.setAttendance(80000);
            match10.setHighlightsUrl("https://www.youtube.com/watch?v=highlights-inter-milan");
            match10.setMatchReport("Inter Milan đã giành chiến thắng trong Derby della Madonnina với bàn thắng từ Lautaro Martínez.");
            matchRepository.save(match10);
            
            // Ligue 1 Match
            Match match11 = new Match();
            match11.setHomeTeam("PSG");
            match11.setAwayTeam("Marseille");
            match11.setHomeScore(3);
            match11.setAwayScore(1);
            match11.setMatchDate(LocalDateTime.now().minusDays(7));
            match11.setCompetition("Ligue 1");
            match11.setMatchStatus("FINISHED");
            match11.setStadium("Parc des Princes");
            match11.setReferee("Clément Turpin");
            match11.setAttendance(48000);
            match11.setHighlightsUrl("https://www.youtube.com/watch?v=highlights-psg-marseille");
            match11.setMatchReport("PSG đã thống trị Le Classique với 3 bàn thắng từ Mbappé, Messi và Neymar.");
            matchRepository.save(match11);
            
            // V-League Match
            Match match12 = new Match();
            match12.setHomeTeam("Hà Nội FC");
            match12.setAwayTeam("Hoàng Anh Gia Lai");
            match12.setHomeScore(2);
            match12.setAwayScore(1);
            match12.setMatchDate(LocalDateTime.now().minusDays(8));
            match12.setCompetition("V-League");
            match12.setMatchStatus("FINISHED");
            match12.setStadium("Sân vận động Hàng Đẫy");
            match12.setReferee("Nguyễn Văn Chôm");
            match12.setAttendance(15000);
            match12.setHighlightsUrl("https://www.youtube.com/watch?v=highlights-hanoi-hagl");
            match12.setMatchReport("Hà Nội FC đã giành chiến thắng trước Hoàng Anh Gia Lai với 2 bàn thắng từ Văn Quyết và Văn Hậu.");
            matchRepository.save(match12);
        }
    }
} 